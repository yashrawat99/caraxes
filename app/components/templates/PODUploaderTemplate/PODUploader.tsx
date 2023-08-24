import Image from "next/image";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import camera from "@/app/components/assets/svgs/pod/camera.svg";
import CustomButton from "../../atoms/CustomButton";
import { asyncSubmitPod, asyncUploadPod, removeImage } from "./store/podSlice";
import { RootState } from "@/app/store/configureStore";
import { PODUploaderTemplate } from "./PODUploader.types";

const PODUploader = ({ id }: PODUploaderTemplate) => {
  const dispatch = useDispatch();
  const { imagesDto, podDto, canSubmit, submitted } = useSelector(
    (state: RootState) => state.podReducer
  );
  const images = imagesDto[id];

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files === null) return;
      const obj = URL.createObjectURL(event.target.files[0]).toString();
      dispatch(
        asyncUploadPod({
          docType: "POD",
          fileName: event.target.files[0].name,
          tripID: id,
          image: obj,
        })
      );
    },
    [dispatch, id]
  );
  const MemoizedUploader = useMemo(() => {
    if (Array.isArray(images) && images.length > 0) return null;
    return (
      <div className={styles.uploader}>
        <input
          className={styles.fileInput}
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelect}
        />
        <div className={styles.content}>
          <Image src={camera} alt="camera" width={32} height={32} />
          <p>POD (पहुंच) की फोटो</p>
        </div>
      </div>
    );
  }, [handleSelect, images]);

  const MemoizedImageContainer = useMemo(() => {
    if (!(Array.isArray(images) && images.length > 0)) return null;
    const onImageRemove = (imgIndex: number) => {
      const newImages = [...images];
      newImages.splice(imgIndex, 1);
      dispatch(removeImage({ index: imgIndex, id: id }));
    };
    return (
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div className={styles.prevImageWrapper} key={image}>
            <div
              className={styles.closeImage}
              onClick={() => onImageRemove(index)}
            >
              x
            </div>
            <Image
              src={image}
              width={70}
              height={120}
              alt=""
              className={styles.prevImage}
            />
          </div>
        ))}
        {images.length > 0 && images.length < 4 && (
          <div className={styles.upload}>
            <input
              className={styles.fileInput}
              type="file"
              accept="image/*"
              multiple
              onChange={handleSelect}
            />
            <div className={styles.addImage}>+</div>
          </div>
        )}
      </div>
    );
  }, [images, handleSelect, dispatch, id]);

  const onSubmitPod = useCallback(() => {
    const pod = podDto[id];
    if (pod === "undefined") {
      // TODO: show error snackbar
      // sentry through
      return;
    }
    // FIXME: doc: any is a hack to get the pod resource keys
    const formData = {
      tripId: id,
      podResourceKeys: pod.map((doc: any) => doc.imgResourceKey),
    };

    dispatch(asyncSubmitPod(formData));
  }, [dispatch, id, podDto]);
  const MemoizedPODUploadHandler = () => {
    if (!(Array.isArray(images) && images.length > 0)) return null;
    return (
      <CustomButton
        onClick={onSubmitPod}
        variant="solid"
        label="पहुंच जमा करें "
        disabled={!canSubmit}
      />
    );
  };
  return (
    <>
      {MemoizedUploader}
      {MemoizedImageContainer}
      <MemoizedPODUploadHandler />
    </>
  );
};

export default PODUploader;

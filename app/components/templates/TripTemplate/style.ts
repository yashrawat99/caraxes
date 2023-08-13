"use client";
import styled from "styled-components";
import { FeedbackAesthetics } from "./util";

export const Container = styled.div`
  font-family: "Baloo 2";
  margin-left: 16px;
  margin-right: 16px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaedfa;
  padding: 16px;
  margin-bottom: 27px;
  position: relative;
  box-shadow: 0px 2px 8px 0px rgba(10, 49, 126, 0.16);
  .info-widget {
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: #f7c145;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    border-radius: 6px;
    padding: 1px 8px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__icon {
      display: flex;
      align-items: flex-start;
      height: 47px;

      img {
        width: 24px;
      }
    }
  }
  .heading {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
  }
  .desc {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: #888888;
    margin-bottom: 16px;
  }
  .divider {
    margin: 0 auto;
    border: 1px solid #ebedf1;
    width: 100%;
  }
  .body {
    color: #000;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    .table-flex {
      display: flex;
      justify-content: space-between;
      .left {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }

  /* POD SECTION */
  .uploadSection.VERIFIED {
    margin-bottom: 0;
  }

  .uploadSection.REJECTED {
    margin-bottom: 0;
  }

  .uploadSection.PENDING {
    margin-bottom: 0;
  }

  .uploadSection.NOT_UPLOADED {
    margin-bottom: 0;
  }
  .image-upload-wrap {
    margin-top: 20px;
    position: relative;
    background: #f7faff;
    height: 140px;
    border-radius: 6px;
  }

  .image-upload-wrap.dashed {
    margin-top: 16px;
    position: relative;
    background: #f7faff;
    border: 1px dashed #66a3ff;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-title-wrap {
    padding: 0 15px 15px 15px;
    color: #222;
  }
  .drag-text {
    text-align: center;
  }
  .drag-text h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }

  .drag-text {
    padding: 30px;
    height: 140px;
  }

  .pod-uploader {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .image-upload-wrap.succesD {
    height: 97px;
    background: rgba(46, 49, 146, 0.08);
    border-radius: 6px;
    border: none;
  }

  .previewImgDiv.NewAdd {
    background: none;
    /* opacity: 0.6; */
    border-radius: 6px;
    text-align: center;
  }

  .show-details_newBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 6px;
  }
  .validity-wrapper {
    background-color: #ffe6eb;
    border-radius: 12px;
    color: #d9052c;
    display: flex;
    flex-direction: row;
    grid-gap: 12px;
    gap: 12px;
    justify-content: flex-start;
    padding: 12px 16px;
    margin-top: 16px;
  }
  .pod-uploader img {
    width: 66%;
  }
  .show-details_newBtn .previewBtn {
    margin-top: 20px;
    margin-bottom: 19px;
  }

  .image-upload-wrap.succesD .drag-text {
    padding: 18px 0px 10px !important;
    height: 160px !important;
  }

  .image-upload-wrap.succesD .drag-text h3 {
    height: 0px !important;
    margin-top: 6px;
  }
  .uploader-section {
    background-color: #ffffff;
  }
  .file-upload-image {
    max-height: 200px;
    max-width: 200px;
    margin: auto;
    padding: 20px;
  }

  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .previewImgDiv {
    background: rgba(46, 49, 146, 0.08);
    /* opacity: 0.6; */
    border-radius: 6px;
    height: 160px;
    text-align: center;

    /* isplay: inline-flex; */
  }
  .image-upload-wrap.addMore {
    width: 70px;
    height: 120px;
    margin: 0;
  }
  .previewImgDiv .pod {
    background: rgba(46, 49, 146, 0.08);
    border-radius: 6px;
  }
  img.previewImgOne.pod {
    width: 70px;
    height: 120px;
    margin-right: 10px;
  }

  img.deletIcon {
    height: 16px;
    position: absolute;
    left: 61px;
    top: -5px;
  }
  .previewImgDiv.pod {
    height: 133px !important;
    margin-bottom: 10px;
    display: flex;
    background: none;
  }

  .imgSelectedDIv {
    position: relative;
  }

  img.previewImgOne.pod {
    width: 70px;
    height: 120px;
    margin-right: 10px;
  }
  .previewImgDIv.pod {
    display: flex;
    background: none;
  }
  .textDiv {
    display: flex;
    justify-content: space-between;
  }
  p.textUploadTextPodTitle {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    padding-bottom: 16px;
  }
  .textDiv.rejected .pod-status,
  .textDiv.REJECTED .pod-status {
    color: #d9052c;
    background: #ffe6eb;
  }
  p.pod-status {
    font-weight: 500;
    font-size: 14px;
    padding: 0 12px;
    border-radius: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 25px;
  }
  .validity-wrapper {
    background-color: #ffe6eb;
    border-radius: 12px;
    color: #d9052c;
    display: flex;
    flex-direction: row;
    grid-gap: 12px;
    gap: 12px;
    justify-content: flex-start;
    padding: 12px 16px;
    margin-top: 16px;
    .validity-text {
      font-family: Baloo 2;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;
    }
  }
  .uploader-section button {
    margin-top: 16px;
  }

  .footer {
    width: 100%;
    .trip__button {
      padding: 12px;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      border: none;
      width: 100%;
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .trip__button-solid {
      background-color: #008800;
      color: #fff;
    }
    .trip__button-outlined {
      border: 1px solid #008800;
      background: #fff;
      color: #008800;
    }
  }
`;
export const TrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  .tracking__info {
    display: flex;
    gap: 11px;
  }
  .tracking__info-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tracking__heading {
    font-weight: 400;
    color: #888;
    font-size: 14px;
    line-height: 22px;
  }
  .tracking__desc {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: left;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
interface FeedbackWidgetContainer {
  bg: string;
}
export const FeedbackWidgetContainer = styled.div<FeedbackWidgetContainer>`
  margin-bottom: 16px;
  .feedback__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #ebedf1;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    gap: 8px;

    .feedback__message {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 400;
    }

    .feedback__score {
      background-color: ${(props) =>
        new FeedbackAesthetics(props.bg).getBackgroundColor()};
      color: ${(props) => new FeedbackAesthetics(props.bg).getTagColor()};
      font-weight: 500;
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
`;
export const TransactionWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const TicketWidget = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf3da;
  padding: 13px 16px;
  border-radius: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #000000;
  .ticket__content {
    display: flex;
    gap: 12px;
    .ticket__desc {
      font-weight: 500;
    }
  }
  .ticket__count {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: #bf9636;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
`;

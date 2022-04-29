import React from "react";
import styled from "styled-components";

type IProps = {
    title: React.ReactNode;
    subTitle: React.ReactNode;
    showIcon?: boolean;
}

const AddIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.28H14V8.78H2V7.28Z" fill="white" fillOpacity="0.6"/>
    <path d="M7.27969 14V2H8.77969V14H7.27969Z" fill="white" fillOpacity="0.6"/>
</svg>

const IconWarp = styled.div`
  cursor: pointer;
`

const SectionHeaderWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 14px;
`

const SectionTitleWarp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 4px;
`

const SectionTitle = styled.h1`
  font-size: 18px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.88);
  margin-right: 8px;
  margin-bottom: 0;
`

const SectionSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  margin: 0;
`

const SectionHeader: React.FC<IProps> = (props) => {
    const {title, subTitle, showIcon} = props
    return <SectionHeaderWarp>
        <SectionTitleWarp>
            <SectionTitle data-wails-no-drag>{title}</SectionTitle>
            {showIcon && <IconWarp data-wails-no-drag><AddIcon /></IconWarp>}
        </SectionTitleWarp>
        <SectionSubTitle data-wails-no-drag>{subTitle}</SectionSubTitle>
    </SectionHeaderWarp>
}

export default SectionHeader;
import * as React from "react";

export const GridMemberLOBCustom = (props: any) => {
    React.useEffect(() => {
        console.log(props.data)
    });
  
    return (
        <div className="lob-custom">
            {props.data.lob === "MEDICARE" ? (
                <svg width="81" height="21" viewBox="0 0 81 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.5166C0 4.99375 4.47715 0.516602 10 0.516602H71C76.5229 0.516602 81 4.99375 81 10.5166C81 16.0394 76.5229 20.5166 71 20.5166H10C4.47715 20.5166 0 16.0394 0 10.5166Z" fill="#684999"/>
                <path d="M13.2746 5.98535L15.7355 12.5244L18.1906 5.98535H20.1066V14.5166H18.6301V11.7041L18.7766 7.94238L16.257 14.5166H15.1965L12.6828 7.94824L12.8293 11.7041V14.5166H11.3527V5.98535H13.2746ZM27.0508 10.708H23.5469V13.333H27.6426V14.5166H22.0645V5.98535H27.6016V7.18066H23.5469V9.53613H27.0508V10.708ZM29.0496 14.5166V5.98535H31.5691C32.323 5.98535 32.991 6.15332 33.573 6.48926C34.159 6.8252 34.6121 7.30176 34.9324 7.91895C35.2527 8.53613 35.4129 9.24316 35.4129 10.04V10.4678C35.4129 11.2764 35.2508 11.9873 34.9266 12.6006C34.6062 13.2139 34.1473 13.6865 33.5496 14.0186C32.9559 14.3506 32.2742 14.5166 31.5047 14.5166H29.0496ZM30.532 7.18066V13.333H31.4988C32.2762 13.333 32.8719 13.0908 33.2859 12.6064C33.7039 12.1182 33.9168 11.4189 33.9246 10.5088V10.0342C33.9246 9.1084 33.7234 8.40137 33.3211 7.91309C32.9187 7.4248 32.3348 7.18066 31.5691 7.18066H30.532ZM38.6539 14.5166H37.1773V5.98535H38.6539V14.5166ZM47.1859 11.7393C47.1 12.6494 46.7641 13.3604 46.1781 13.8721C45.5922 14.3799 44.8129 14.6338 43.8402 14.6338C43.1605 14.6338 42.5609 14.4736 42.0414 14.1533C41.5258 13.8291 41.1273 13.3701 40.8461 12.7764C40.5648 12.1826 40.4184 11.4932 40.4066 10.708V9.91113C40.4066 9.10645 40.5492 8.39746 40.8344 7.78418C41.1195 7.1709 41.5277 6.69824 42.059 6.36621C42.5941 6.03418 43.2113 5.86816 43.9105 5.86816C44.852 5.86816 45.6098 6.12402 46.184 6.63574C46.7582 7.14746 47.0922 7.87012 47.1859 8.80371H45.7094C45.6391 8.19043 45.4594 7.74902 45.1703 7.47949C44.8852 7.20605 44.4652 7.06934 43.9105 7.06934C43.266 7.06934 42.7699 7.30566 42.4223 7.77832C42.0785 8.24707 41.9027 8.93652 41.8949 9.84668V10.6025C41.8949 11.5244 42.059 12.2275 42.3871 12.7119C42.7191 13.1963 43.2035 13.4385 43.8402 13.4385C44.4223 13.4385 44.8598 13.3076 45.1527 13.0459C45.4457 12.7842 45.6312 12.3486 45.7094 11.7393H47.1859ZM53.4914 12.5303H50.1867L49.4953 14.5166H47.9543L51.177 5.98535H52.507L55.7355 14.5166H54.1887L53.4914 12.5303ZM50.6027 11.335H53.0754L51.8391 7.7959L50.6027 11.335ZM60.043 11.2295H58.3906V14.5166H56.9082V5.98535H59.9082C60.8926 5.98535 61.6523 6.20605 62.1875 6.64746C62.7227 7.08887 62.9902 7.72754 62.9902 8.56348C62.9902 9.13379 62.8516 9.6123 62.5742 9.99902C62.3008 10.3818 61.918 10.6768 61.4258 10.8838L63.3418 14.4404V14.5166H61.7539L60.043 11.2295ZM58.3906 10.04H59.9141C60.4141 10.04 60.8047 9.91504 61.0859 9.66504C61.3672 9.41113 61.5078 9.06543 61.5078 8.62793C61.5078 8.1709 61.377 7.81738 61.1152 7.56738C60.8574 7.31738 60.4707 7.18848 59.9551 7.18066H58.3906V10.04ZM69.5828 10.708H66.0789V13.333H70.1746V14.5166H64.5965V5.98535H70.1336V7.18066H66.0789V9.53613H69.5828V10.708Z" fill="white"/>
                </svg>
            ) : ""}
        </div>
    );
  };
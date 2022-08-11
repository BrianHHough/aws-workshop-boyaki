import styled from "styled-components";
import Microlink from "@microlink/react";
import Linkify from 'react-linkify';


export const MyCustomCardFinalized = styled(Microlink)`
/* font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'; */
max-width: 400px;
max-height: 312px;
border-radius: 20px;
left: 50%;
transform: translateX(-50%);
display: block !important;
/* &:hover {
  background: red;
} */
.sc-gXmSlM.etbOPw.microlink_card.sc-gzzPqb.dHAjob {
  display: block !important;
}
a * {
  display: block !important;
}
div {
  min-width: 100%;
  height: 200px;
  position: relative;
}
header {
  /* color: green; */
  max-height: 32px;
}
.sc-hKMtZM.kOxdaf.microlink_card__content_description {
  margin-top: 5px;
  max-height: 40px;
  /* color: orange; */
}
.bLsFOE.bLsFOE.bLsFOE {
  height: 100px;
}
.sc-eCYdqJ.dZqmpF.microlink_card__content_url {
  position: absolute;
  font-size: 10pt !important;
}
/* sc-ftvSup fzpjnt sc-papXJ dwzovf microlink_card__media microlink_card__media_image */
.sc-gsnTZi.lcBKuM.microlink_card__content {
  position: relative;
}
.sc-bczRLJ.bUAHHx {
  font-size: 10pt;
  white-space: normal;
}
/* .sc-bczRLJ.bUAHHx.sc-jSMfEi.inNZsT {
  font-size: 10pt;
} */
p {
  font-size: 8pt;
  white-space: normal;
}
span {
  display: none;
}
`;

export const LinkifyStyled = styled(Linkify)`
  div * {
    color: red !important;
    background-color: green;
  }
  :nth-child(1) * {
    color: red !important;
  }
  :nth-child(2) * {
    color: red !important;
  }
  :first-child(2) * {
    color: red !important;
  }
`;
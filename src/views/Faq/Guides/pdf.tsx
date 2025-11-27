import { StaticImageData } from "next/image";

import t31p_img from "./assets/pdf/T31P.png";
import w70b_img from "./assets/pdf/w70b.png";
import Yealink_T31_T31P_T31G_QSG_img from "./assets/pdf/Yealink_T31_T31P_T31G_QSG.png";
import w60p_img from "./assets/pdf/W60P.png";
import t54w_img from "./assets/pdf/T54W.png";
import w76p_img from "./assets/pdf/W76P.png";
import t53w_img from "./assets/pdf/T53W.png";
import lorex_e841ca_img from "./assets/pdf/Lorex_E841CA.png";
import Lorex_E841CA_with_cover_img from "./assets/pdf/Lorex_E841CA_with_cover.png";
import Lorex_without_cover_img from "./assets/pdf/Lorex_without_cover.png";
import Yeastar_P_Series_img from "./assets/pdf/Yeastar_P_Series.png";
import SMS_MMS_img from "./assets/pdf/SMS_MMS.png";
import Wireless_Phones_img from "./assets/pdf/Wireless_Phones.png";
import Revised_Standard_img from "./assets/pdf/Revised_Standard.png";
import VOIP_HD_STANDARD_WITH_WIRELESS_PHONES_img from "./assets/pdf/VOIP_HD_STANDARD_WITH_WIRELESS_PHONES.png";
import Standard_VoIP_HD_Standard_Phones_img from "./assets/pdf/Standard_VoIP_HD_Standard_Phones.png";
import VoIP_HD_Microsoft_Teams_Phones_img from "./assets/pdf/VoIP_HD_Microsoft_Teams_Phones.png";
import IVRP_Annual_img from "./assets/pdf/IVRP_Annual.png";
import Local_SEO_img from "./assets/pdf/Local_SEO.png";
import Full_Services_img from "./assets/pdf/Full_Services.png";
import Web_Hosting_img from "./assets/pdf/Web_Hosting.png";
import WEBSITE_SERVICES_img from "./assets/pdf/WEBSITE_SERVICES.png";
import MULTI_FUNCTIONAL_PRODUCTS_img from "./assets/pdf/MULTI_FUNCTIONAL_PRODUCTS.png";
import MANAGED_NETWORK_SERVICES_img from "./assets/pdf/MANAGED_NETWORK_SERVICES.png";
import CYBER_SECURITY_img from "./assets/pdf/CYBER_SECURITY.png";
import COMMUNICATION_SERVICES_img from "./assets/pdf/COMMUNICATION_SERVICES.png";

type Pdf = {
  img: string | StaticImageData;
  name: string;
  path: string;
};

export const pdfs: Pdf[] = [
  { img: t31p_img, path: "/guides/T31P.pdf", name: "t31p" },
  { img: w70b_img, path: "/guides/w70b.pdf", name: "w70b" },
  {
    img: Yealink_T31_T31P_T31G_QSG_img,
    path: "/guides/Yealink_T31_T31P_T31G_QSG.pdf",
    name: "Yealink T31 T31P T31G QSG",
  },
  {
    img: w60p_img,
    path: "/guides/W60P.pdf",
    name: "w60p",
  },
  {
    img: w76p_img,
    path: "/guides/W76P.pdf",
    name: "w76p",
  },
  {
    img: t54w_img,
    path: "/guides/T54W.pdf",
    name: "t54w",
  },
  {
    img: t53w_img,
    path: "/guides/T53W.pdf",
    name: "t53w",
  },
  {
    img: lorex_e841ca_img,
    path: "/guides/Lorex_E841CA.pdf",
    name: "lorex e841ca",
  },
  {
    img: Lorex_E841CA_with_cover_img,
    path: "/guides/Lorex_E841CA_with_cover.pdf",
    name: "Lorex E841CA with cover",
  },
  {
    img: Lorex_without_cover_img,
    path: "/guides/Lorex_without_cover.pdf",
    name: "Lorex without cover",
  },
  {
    img: Yeastar_P_Series_img,
    path: "/guides/Yeastar_P_Series.pdf",
    name: "Yeastar P Series",
  },
  {
    img: SMS_MMS_img,
    path: "/guides/SMS_MMS.pdf",
    name: "SMS & MMS",
  },
  {
    img: Wireless_Phones_img,
    path: "/guides/Wireless_Phones.pdf",
    name: "Wireless Phones",
  },
  {
    img: Revised_Standard_img,
    path: "/guides/Revised_Standard.pdf",
    name: "Revised Standard",
  },
  {
    img: VOIP_HD_STANDARD_WITH_WIRELESS_PHONES_img,
    path: "/guides/VOIP_HD_STANDARD_WITH_WIRELESS_PHONES.pdf",
    name: "VOIP HD STANDARD WITH WIRELESS PHONES",
  },
  {
    img: Standard_VoIP_HD_Standard_Phones_img,
    path: "/guides/Standard_VoIP_HD_Standard_Phones.pdf",
    name: "Standard VoIP HD Standard Phones",
  },
  {
    img: VoIP_HD_Microsoft_Teams_Phones_img,
    path: "/guides/VoIP_HD_Microsoft_Teams_Phones.pdf",
    name: "VoIP HD Microsoft Teams Phones",
  },
  {
    img: IVRP_Annual_img,
    path: "/guides/IVRP_Annual.pdf",
    name: "IVRP Annual",
  },
  {
    img: Local_SEO_img,
    path: "/guides/Local_SEO.pdf",
    name: "Local SEO",
  },

  {
    img: Full_Services_img,
    path: "/guides/Full_Services.pdf",
    name: "Full Services",
  },
  {
    img: Web_Hosting_img,
    path: "/guides/Web_Hosting.pdf",
    name: "Web Hosting",
  },
  {
    img: WEBSITE_SERVICES_img,
    path: "/guides/WEBSITE_SERVICES.pdf",
    name: "WEBSITE SERVICES",
  },
  {
    img: MULTI_FUNCTIONAL_PRODUCTS_img,
    path: "/guides/MULTI_FUNCTIONAL_PRODUCTS.pdf",
    name: "MULTI FUNCTIONAL PRODUCTS",
  },
  {
    img: MANAGED_NETWORK_SERVICES_img,
    path: "/guides/MANAGED_NETWORK_SERVICES.pdf",
    name: "MANAGED NETWORK SERVICES",
  },
  {
    img: CYBER_SECURITY_img,
    path: "/guides/CYBER_SECURITY.pdf",
    name: "CYBER SECURITY",
  },
  {
    img: COMMUNICATION_SERVICES_img,
    path: "/guides/COMMUNICATION_SERVICES.pdf",
    name: "COMMUNICATION SERVICES",
  },
];

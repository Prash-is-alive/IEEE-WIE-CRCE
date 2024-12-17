// IEEE member imports
import aditya2 from "../assets/TeamMembers/IEEE/aditya2.png";
import vedant2 from "../assets/TeamMembers/IEEE/vedant2.png";
import criselle from "../assets/TeamMembers/IEEE/criselle.png";
import mrunali2 from "../assets/TeamMembers/IEEE/mrunali2.png";
import adarsh2 from "../assets/TeamMembers/IEEE/adarsh2.png";
import samrudhi2 from "../assets/TeamMembers/IEEE/samrudhi2.png";
import harsh from "../assets/TeamMembers/IEEE/harsh.png";
import navin from "../assets/TeamMembers/IEEE/navin.png";
import anshuman from "../assets/TeamMembers/IEEE/anshuman.png";
import darshil from "../assets/TeamMembers/IEEE/darshil.png";
import binil from "../assets/TeamMembers/IEEE/binil.png";
import aarya from "../assets/TeamMembers/IEEE/aarya.png";
import roshan from "../assets/TeamMembers/IEEE/roshan.png";
import neil from "../assets/TeamMembers/IEEE/neil.png";
import mohini from "../assets/TeamMembers/IEEE/mohini.png";
//WIE member imports
import sanika2 from "../assets/TeamMembers/WIE/sanika2.png";
import raina2 from "../assets/TeamMembers/WIE/raina2.png";
import sania2 from "../assets/TeamMembers/WIE/sania2.png";
import gayatri2 from "../assets/TeamMembers/WIE/gayatri2.png";
import mokshada2 from "../assets/TeamMembers/WIE/mokshada2.png";
import mohika2 from "../assets/TeamMembers/WIE/mohika2.png";
import ashal from "../assets/TeamMembers/WIE/ashal.png";
import steffi from "../assets/TeamMembers/WIE/steffi.png";
import hanan from "../assets/TeamMembers/WIE/hanan.png";
import lini from "../assets/TeamMembers/WIE/lini.png";
import aahana from "../assets/TeamMembers/WIE/aahana.png";
import freia from "../assets/TeamMembers/WIE/freia.png";
//Event imports
import ai from "../assets/events/AI.png";
import EscapeRoom from "../assets/events/EscapeRoom.png";
import IVStudents from "../assets/events/IVStudents.png";
import IVTeachers from "../assets/events/IVTeachers.png";
import WomenLeadersInStartup from "../assets/events/WomenLeadersInStartup.png";
import entraprenuer from "../assets/events/entraprenuer.png";
import goal_achievement from "../assets/events/goal_achievement.png";
import industry from "../assets/events/industry.png";
import ingenium from "../assets/events/ingenium.png";
import ingenium2 from "../assets/events/ingenium2.png";
import lasermaze from "../assets/events/lasermaze.png";
import prakalp from "../assets/events/prakalp.png";
import research from "../assets/events/research.png";
import start_up from "../assets/events/start_up.png";
import web_designing from "../assets/events/web_designing.png";
import women_healthcare from "../assets/events/women_healthcare.png";
import womensDay from "../assets/events/womensDay.png";
import womensDay23 from "../assets/events/womensDay23.png";
import technical_paper from "../assets/events/technical_paper.png";
import PitchDeckPresentation from "../assets/events/PitchDeckPresentation.png";
import startup_ecosystem from "../assets/events/stratup_ecosystem.png";
import national_education_day from "../assets/events/national_education_day.png";
import techVista from "../assets/events/techVista.png";
import peerPong from "../assets/events/peerpong.png";
import dareToRace from "../assets/events/dareToRace.png";
import prakalp2 from "../assets/events/prakalp2k24.jpg";
//Mentors
import sapna from "../assets/TeamMembers/Mentors/sapna.jpg";
import sushma from "../assets/TeamMembers/Mentors/sushma.jpg";
import vaibhav from "../assets/TeamMembers/Mentors/vaibhav.jpg";
//Logos
import ieeeIcon from "../assets/logos/ieeeIcon.svg";
import wieIcon from "../assets/logos/wieIcon.svg";
import ieeeWieCombinedIcon from "../assets/logos/ieee-wie-logo.png";

// Trying to import all the images dynamically!
// function importAllImages(MEMBERS) {
//   const images = {};
//   MEMBERS.forEach((member) => {
//     images[member.name] = require(`../assets/TeamMembers/${member.team}/${
//       member.name.toLowerCase().split(" ")[0]
//     }.png`);
//   });
//   return images;
// }

const MEMBERS = [
  {
    name: "Aditya Dhikale",
    imgsrc: aditya2,
    position: "IEEE CHAIRPERSON",
    team: "IEEE",
    linkedin: "aditya-dhikale-674643288",
    instagramId: "adityadhikale2003",
    icon: "game-icons:rank-3",
  },
  {
    name: "Vedant Chawardol",
    imgsrc: vedant2,
    position: "SECRETARY",
    team: "IEEE",
    linkedin: "vedant",
    instagramId: "vedant",
    icon: "game-icons:rank-2",
  },
  {
    name: "Mrunali Tamhankar",
    imgsrc: mrunali2,
    position: "VICE CHAIRPERSON",
    team: "IEEE",
    linkedin: "mrunali-tamhankar-25050026b",
    instagramId: "mrunoly",
    icon: "mdi:account-tie-outline",
  },
  {
    name: "Adarsh Gupta",
    imgsrc: adarsh2,
    position: "VICE CHAIRPERSON",
    team: "IEEE",
    linkedin: "adarsh-gupta-650a09264",
    instagramId: "aadarshhh_173",
    icon: "mdi:account-tie-outline",
  },
  {
    name: "Samrudhi Shetty",
    imgsrc: samrudhi2,
    position: "Event Coordinator",
    team: "IEEE",
    linkedin: "samrudhi-shetty-5a227b264",
    instagramId: "_samrudhishetty_",
    icon: "octicon:workflow-16",
  },
  {
    name: "Harsh Salunkhe",
    imgsrc: harsh,
    position: "SR. TECHNICAL HEAD",
    team: "IEEE",
    linkedin: "harsh-salunkhe-140335257",
    instagramId: "_harsh_salunkhe",
    icon: "game-icons:techno-heart",
  },
  {
    name: "Criselle Rodrigues",
    imgsrc: criselle,
    position: "Sr. Design Head",
    team: "IEEE",
    linkedin: "criselle",
    icon: "game-icons:rank-1",
  },
  {
    name: "Navin Reddy",
    imgsrc: navin,
    position: "SR. PR HEAD",
    team: "IEEE",
    linkedin: "navin",
    instagramId: "navin_2774",
    icon: "icon-park-outline:connect",
  },
  {
    name: "Anshuman Sahu",
    imgsrc: anshuman,
    position: "Sr. Marketing Head",
    team: "IEEE",
    linkedin: "anshuman-sahu-3a92282",
    instagramId: "anshuman.sahu1",
    icon: "nimbus:marketing",
  },
  {
    name: "Darshil Sonawane",
    imgsrc: darshil,
    position: "SR. Documentation HEAD",
    team: "IEEE",
    linkedin: "Darshil Sonawane ",
    instagramId: "darshil_6113",
    icon: "carbon:document-view",
  },
  {
    name: "Binil John ",
    imgsrc: binil,
    position: "JR. TECHNICAL HEAD",
    team: "IEEE",
    linkedin: "Binil John ",
    instagramId: "binil_21",
    icon: "bi:code-slash",
  },
  {
    name: "Aarya Nawar",
    imgsrc: aarya,
    position: "JR DESIGN HEAD",
    team: "IEEE",
    linkedin: "aarya",
    instagramId: "aaryyaa7",
    icon: "streamline:interface-align-layers-2-design-layer-layers-pile-stack",
  },
  {
    name: "Roshan Christopher ",
    imgsrc: roshan,
    position: "JR. PR head",
    team: "IEEE",
    linkedin: "roshan",
    instagramId: "_roshhh._._",
    icon: "carbon:chart-relationship",
  },
  {
    name: "Neil Faber",
    imgsrc: neil,
    position: "JR. Marketing head",
    team: "IEEE",
    linkedin: "neil",
    instagramId: "neil",
    icon: "fluent-mdl2:market",
  },
  {
    name: "Mohini Balmiki",
    imgsrc: mohini,
    position: "JR. Documentation head",
    team: "IEEE",
    linkedin: "mohini",
    instagramId: "mohini._10",
    icon: "solar:document-broken",
  },
  {
    name: "Sanika Rozario",
    imgsrc: sanika2,
    position: "The Chairperson",
    team: "WIE",
    linkedin: "Sanika Rozario ",
    instagramId: "rozariosanika",
    icon: "game-icons:rank-3",
  },
  {
    name: "Raina Joyce Raj ",
    imgsrc: raina2,
    position: "Vice Chairperson",
    team: "WIE",
    linkedin: "raina-joyce-b92a1a249",
    instagramId: "raina_joyce7",
    icon: "game-icons:rank-2",
  },
  {
    name: "Sania Almeida ",
    imgsrc: sania2,
    position: "Advisor",
    team: "WIE",
    linkedin: "sania-almeida-17b5b2249",
    instagramId: "almeida.sania.18",
    icon: "game-icons:rank-1",
  },
  {
    name: "Gayatri Nadar ",
    imgsrc: gayatri2,
    position: "Event Coordinator & Treasurer",
    team: "WIE",
    linkedin: "gayatri-nadar-570b76264",
    instagramId: "grn_idk",
    icon: "carbon:event",
  },
  {
    name: "Mokshada Rane ",
    imgsrc: mokshada2,
    position: "Sr. Documentation head",
    team: "WIE",
    linkedin: "mokshada-rane-b26394259",
    instagramId: "mokshadarane",
    icon: "solar:document-add-broken",
  },
  {
    name: "Mohika Rane",
    imgsrc: mohika2,
    position: "Design Head",
    team: "WIE",
    linkedin: "mohika-rane-1b0503259",
    instagramId: "ranemohika",
    icon: "ic:outline-design-services",
  },
  {
    name: "Ashal Dabre ",
    imgsrc: ashal,
    position: "Technical Head",
    team: "WIE",
    linkedin: "ashal-dabre-415597239",
    instagramId: "ash.dabre",
    icon: "grommet-icons:technology",
  },
  {
    name: "Steffi Peter",
    imgsrc: steffi,
    position: "PR Head",
    team: "WIE",
    linkedin: "Steffi Peter",
    instagramId: "_steffi._.peter_",
    icon: "game-icons:relationship-bounds",
  },
  {
    name: "Hanan Fernandes ",
    imgsrc: hanan,
    position: "JR DESIGN HEAD",
    team: "WIE",
    linkedin: "Hanan Fernandes ",
    instagramId: "_hanan_william",
    icon: "clarity:design-line",
  },
  {
    name: "Lini Dsouza ",
    imgsrc: lini,
    position: "JR. Documentation head",
    team: "WIE",
    linkedin: "Lini Dsouza ",
    instagramId: "lini_dsouza",
    icon: "pajamas:doc-code",
  },
  {
    name: "Aahana Alexus Peter",
    imgsrc: aahana,
    position: "JR. PR head",
    team: "WIE",
    linkedin: "aahana-peter",
    instagramId: "aahana_peter",
    icon: "tabler:circles-relation",
  },
  {
    name: "Freia Carmelica Quadros",
    imgsrc: freia,
    position: "Jr. Event Coordinator",
    team: "WIE",
    linkedin: "freia-quadros-358022324",
    instagramId: "freiac_16",
    icon: "fluent:person-ribbon-20-regular",
  },
];

// const MemberImages = importAllImages(MEMBERS);
// console.log(MemberImages);

const EVENTS = [
  {
    title: "Prakalp 2k24",
    imgsrc: prakalp2,
    description:
      '"PRAKALP 2k24" is a national-level project competition serving as a platform for students to showcase their engineering projects across hardware and software categories.',
    keyword: "ieee,wie",
    // ongoingLink: "https://shorturl.at/kHV09",
  },
  {
    title: "Dare To Race",
    imgsrc: dareToRace,
    description:
      "Gear up your creativity and ignite your passion for speed at CRESCENDO 2024's 'Dare to Race' - where engineering prowess meets the thrill of the track!",
    keyword: "ieee",
  },
  {
    title: "Peer Pong",
    imgsrc: peerPong,
    description:
      "Dive into the thrill of tech and Ping Pong at CRESCENDO's Peer Pong by Women In Engineering! Score points with precision, conquer tasks, and compete for exciting prizes.",
    keyword: "wie",
  },
  {
    title: "Tech-Vista 2024",
    imgsrc: techVista,
    description:
      "Tech-Vista 2024: Elevate your tech journey with Placement Talks by Vivek Gupta, ICPC World Finalist, and an exhilarating Data Structure and Algorithm contest!",
    keyword: "ieee",
  },

  {
    title: "National Education Day 2023",
    imgsrc: national_education_day,
    description:
      "Elevate National Education Day with AICTE's enlightening ATAL FDP on 'Applied Machine Learning for VLSI Design' led by the accomplished Dr. Vijay Joshi!",
    keyword: "ieee",
  },
  {
    title: "Ingenium: Igniting Innovation on Engineer's Day",
    imgsrc: ingenium2,
    description:
      "Get ready for a jaw-dropping engineering spectacle at Ingenium, where students' ingenuity ignites a thrilling show of innovation!",
    keyword: "wie,ieee",
  },
  {
    title: "Startup Ecosystem",
    imgsrc: startup_ecosystem,
    description:
      "Prof. Heena Pendhari guided us through the 'Startup Ecosystem' event, where everyone explored ideas, innovations, and research.",
    keyword: "wie",
  },
  {
    title: "Perfect Pitch Deck Presentation",
    imgsrc: PitchDeckPresentation,
    description:
      "The event is about a brief presentation which showcases key aspects of your business plan and is used to pitch to investors.",
    keyword: "ieee",
  },
  {
    title: "Prakalp: Project Competition",
    imgsrc: prakalp,
    description:
      "A National level project competition which involves the hardware and software domain",
    keyword: "wie,ieee",
  },

  {
    title: "Women's Day Celebration 2023",
    imgsrc: womensDay23,
    description:
      "Celebrated International Women's Day with Mental Health Awareness Session.",
    keyword: "ieee,wie",
  },

  {
    title: "Industrial Visit",
    imgsrc: IVStudents,
    description:
      "An industrial visit organised by WIE for students of FRCRCE to Sify's data centre",
    keyword: "wie",
  },
  {
    title: "Seminar on AI",
    imgsrc: ai,
    description:
      "Mr Uday Kamath, an alumni of FRCRCE gave insights in the world of AI",
    keyword: "ieee",
  },
  {
    title: "Laser Maze",
    imgsrc: lasermaze,
    description:
      "IEEE council organized Laser Maze game for Synergy Fest 2k22.",
    keyword: "ieee",
  },
  {
    title: "CRCE TRANSYLVANIA",
    imgsrc: EscapeRoom,
    description:
      "WIE council organized CRCE themed Escape Room game for the Synergy Fest 2k22.",
    keyword: "wie",
  },
  {
    title: "Industrial Visit and Training at SICK INDIA",
    imgsrc: IVTeachers,
    description:
      "IEEE in association with AI & DS Department organized a visit to SICK INDIA PVT LTD at Naigaon",
    keyword: "ieee",
  },
  {
    title: "Women Leaders in Startup",
    imgsrc: WomenLeadersInStartup,
    description:
      "Mrs. Jyoti Bharadwaj shared her experience as Woman Entrepreneur and Founder",
    keyword: "wie",
  },
  {
    title: "Ingenium- Engineer's Day Competition",
    imgsrc: ingenium,
    description:
      "A problem statement and creative solutions bought up by the students.",
    keyword: "ieee,wie",
  },
  {
    title: "Writing Research Paper and Patent Application",
    imgsrc: research,
    description:
      "Students got important insights from our Principal Sir and his student-Jenil Dave.",
    keyword: "ieee",
  },
  {
    title: "Succesful Startup Founders",
    imgsrc: entraprenuer,
    description:
      "Meet alumni of our college, Mr.Mohamad Ahmed; founder of Hridam Surgicals.",
    keyword: "ieee",
  },
  {
    title: "Women's Day Celebration 2022",
    imgsrc: womensDay,
    description:
      "First offline event after the pandemic to celebrate International Women's Day.",
    keyword: "ieee,wie",
  },
  {
    title: "Web Designing Workshop",
    imgsrc: web_designing,
    description:
      "A workshop to introduce students to website building and design thinking for web based projects.",
    keyword: "wie",
  },
  {
    title: "Women Healthcare Awareness",
    imgsrc: women_healthcare,
    description:
      "A gynecologist for busting myths about periods, PCOD, PCOS, and female hygiene.",
    keyword: "wie",
  },
  {
    title: "Industrial Trends and Technology",
    imgsrc: industry,
    description:
      "A session to enlighten students about the industrial trends and the demands that people make from the Industry and how those can be fulfilled.",
    keyword: "ieee",
  },
  {
    title: "Goal Achievement Program",
    imgsrc: goal_achievement,
    description:
      "A session exclusively for Fr. CRCE teachers on achieving goals.",
    keyword: "ieee",
  },
  {
    title: "Succesful Start-Up Founders",
    imgsrc: start_up,
    description:
      "A webinar for students to gain knowledge about the skills required for entrepreneurship.",
    keyword: "ieee",
  },
  {
    title: "Technical Paper Webinar",
    imgsrc: technical_paper,
    description:
      "Webinar for the students to learn about the selection of a topic and how to write a technical paper.",
    keyword: "ieee",
  },
];
const MENTORS = [
  {
    name: "Mrs. Sushma Nagdeote",
    description: "WIE-CRCE Branch Counsellor",
    imgsrc: sushma,
  },
  {
    name: "Mrs. Sapna Prabhu",
    description: "IEEE-CRCE Branch Mentor",
    imgsrc: sapna,
  },
  {
    name: "Mr. Vaibhav Godbole",
    description: "IEEE-CRCE Branch Counsellor",
    imgsrc: vaibhav,
  },
];

const EVENTTABS = [
  {
    class: "all",
    logo: ieeeWieCombinedIcon,
  },
  {
    class: "ieee",
    logo: ieeeIcon,
  },
  {
    class: "wie",
    logo: wieIcon,
  },
];
export { MENTORS, EVENTS, MEMBERS, EVENTTABS };

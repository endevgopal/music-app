import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: 'Old School',
      cover:
        'https://images.hungama.com/c/1/513/625/51100890/51100890_300x300.jpg',
      artist: 'Sidhu Moosewala',
      audio:
        'https://res.cloudinary.com/dtatrg6np/video/upload/v1623823707/songs/OLD_SKOOL_Full_Video_Prem_Dhillon_ft_Sidhu_Moose_WalaThe_KiddNseebRahul_Chahal_GoldMedia_mwmen5.mp3',
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Temporary Pyar',
      cover:
        'https://images.hungama.com/c/1/d18/717/60959434/60959434_300x300.jpg',
      artist: 'KAKA',
      audio:
        'https://res.cloudinary.com/dtatrg6np/video/upload/v1623823715/songs/Temporary_Pyar_KAKA_Darling_Adaab_Kharoud_Anjali_Arora_New_Punjabi_Songs_2021_Latest_S_remz1z.mp3',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Mirchi',
      cover:
        'https://images.hungama.com/c/1/d8d/2e2/58977937/58977937_300x300.jpg',
      artist: 'DIVINE',
      audio:
        'https://res.cloudinary.com/dtatrg6np/video/upload/v1623823705/songs/DIVINE_-_MIRCHI_Feat._Stylo_G_MC_Altaf_Phenom_-_Official_Music_Video_ldddqy.mp3',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Royal Rumble',
      cover:
        'https://images.hungama.com/c/1/d14/22a/61263097/61263097_300x300.jpg',
      artist: 'Emiway Bantai',
      audio:
        'https://res.cloudinary.com/dtatrg6np/video/upload/v1623823699/songs/EMIWAY_-_ROYAL_RUMBLE_PROD_BY._BKAY_OFFICIAL_MUSIC_VIDEO_rmn0n1.mp3',
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;

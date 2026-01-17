export interface IData {
  contact: {
    social_links: {
      github: string;
      linkedin: string;
    };
    email: string;
    phone: string;
    address: string;
  };
  email: string;
  full_name: string;
  bio: string;
  profile_image: string;
  skills: string[];
  about_text: string;
  projects: [
    {
      id: string;
      title: string;
      description: string;
      image_url: string;
      technologies: string[];
      live_url: string;
      github_url: string;
      _id: string;
    }
  ];
  experience: [
    {
      company: string;
      position: string;
      duration: string;
      _id: string;
    }
  ];
}

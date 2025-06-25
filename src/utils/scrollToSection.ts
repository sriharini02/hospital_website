export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

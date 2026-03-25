/**
 * GTM Events Configuration
 * Integração com Google Tag Manager para rastreamento de eventos no portfólio
 * Container ID: GTM-MZQGC3WB
 * Servidor Stape: https://gncvsywq.sag.stape.io
 */

// Declarar dataLayer global
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Enviar evento para GTM
 * @param eventName - Nome do evento
 * @param eventData - Dados do evento
 */
export const pushGTMEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: new Date().toISOString(),
    });
    console.log(`[GTM Event] ${eventName}`, eventData);
  }
};

/**
 * Eventos de Projeto
 */
export const gtmEvents = {
  // Projeto - Clique para abrir modal
  projectClicked: (projectTitle: string, projectTag: string) => {
    pushGTMEvent('project_clicked', {
      project_title: projectTitle,
      project_tag: projectTag,
      event_category: 'Projects',
      event_label: projectTitle,
    });
  },

  // Projeto - Download de Notebook
  notebookDownloaded: (projectTitle: string, fileName: string) => {
    pushGTMEvent('notebook_downloaded', {
      project_title: projectTitle,
      file_name: fileName,
      event_category: 'Downloads',
      event_label: `Notebook: ${fileName}`,
    });
  },

  // Projeto - Download de PDF
  pdfDownloaded: (projectTitle: string, fileName: string) => {
    pushGTMEvent('pdf_downloaded', {
      project_title: projectTitle,
      file_name: fileName,
      event_category: 'Downloads',
      event_label: `PDF: ${fileName}`,
    });
  },

  // Projeto - Visualizar Website
  websiteViewed: (projectTitle: string, websiteUrl: string) => {
    pushGTMEvent('website_viewed', {
      project_title: projectTitle,
      website_url: websiteUrl,
      event_category: 'Projects',
      event_label: `Website: ${projectTitle}`,
    });
  },

  /**
   * Eventos de Contato
   */
  // Clique em Email
  emailClicked: () => {
    pushGTMEvent('contact_email_clicked', {
      contact_type: 'email',
      email: 'rodriguesfilipe6108@gmail.com',
      event_category: 'Contact',
      event_label: 'Email Contact',
    });
  },

  // Clique em WhatsApp
  whatsappClicked: () => {
    pushGTMEvent('contact_whatsapp_clicked', {
      contact_type: 'whatsapp',
      phone: '+5511986339285',
      event_category: 'Contact',
      event_label: 'WhatsApp Contact',
    });
  },

  // Clique em LinkedIn
  linkedinClicked: () => {
    pushGTMEvent('contact_linkedin_clicked', {
      contact_type: 'linkedin',
      url: 'https://www.linkedin.com/in/filipe-rodrigues-24678317a/',
      event_category: 'Contact',
      event_label: 'LinkedIn Profile',
    });
  },

  // Clique em GitHub
  githubClicked: () => {
    pushGTMEvent('contact_github_clicked', {
      contact_type: 'github',
      url: 'https://github.com/Mindgaze',
      event_category: 'Contact',
      event_label: 'GitHub Profile',
    });
  },

  /**
   * Eventos de Currículo
   */
  // Visualizar Currículo
  curriculumViewed: () => {
    pushGTMEvent('curriculum_viewed', {
      action: 'view',
      file_type: 'pdf',
      event_category: 'Downloads',
      event_label: 'Curriculum Viewed',
    });
  },

  // Baixar Currículo
  curriculumDownloaded: () => {
    pushGTMEvent('curriculum_downloaded', {
      action: 'download',
      file_type: 'pdf',
      event_category: 'Downloads',
      event_label: 'Curriculum Downloaded',
    });
  },

  /**
   * Eventos de Navegação
   */
  // Clique em seção (Sobre, Skills, Projetos, Contato)
  sectionClicked: (sectionName: string) => {
    pushGTMEvent('section_clicked', {
      section_name: sectionName,
      event_category: 'Navigation',
      event_label: `Section: ${sectionName}`,
    });
  },

  // Scroll para seção
  sectionScrolled: (sectionName: string) => {
    pushGTMEvent('section_scrolled', {
      section_name: sectionName,
      event_category: 'Engagement',
      event_label: `Scrolled to: ${sectionName}`,
    });
  },

  /**
   * Eventos de Engajamento
   */
  // Modal aberto
  modalOpened: (modalTitle: string) => {
    pushGTMEvent('modal_opened', {
      modal_title: modalTitle,
      event_category: 'Engagement',
      event_label: `Modal: ${modalTitle}`,
    });
  },

  // Modal fechado
  modalClosed: (modalTitle: string) => {
    pushGTMEvent('modal_closed', {
      modal_title: modalTitle,
      event_category: 'Engagement',
      event_label: `Modal Closed: ${modalTitle}`,
    });
  },

  /**
   * Evento de Visualização de Página
   */
  pageView: (pagePath: string, pageTitle: string) => {
    pushGTMEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      event_category: 'Page',
      event_label: pageTitle,
    });
  },
};

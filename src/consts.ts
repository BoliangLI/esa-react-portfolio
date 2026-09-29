import type { Site, Metadata, Socials } from '@types';
export const SITE: Site = { NAME: 'Alex', EMAIL: 'hello@example.com', NUM_POSTS_ON_HOMEPAGE: 3, NUM_WORKS_ON_HOMEPAGE: 2, NUM_PROJECTS_ON_HOMEPAGE: 3 };
export const HOME: Metadata = { TITLE: '个人主页', DESCRIPTION: '独立开发者与数字体验设计师，关注简单、好用、有趣的产品。' };
export const BLOG: Metadata = { TITLE: '写作', DESCRIPTION: '关于设计、开发与持续学习的记录。' };
export const WORK: Metadata = { TITLE: '经历', DESCRIPTION: '创造数字体验的旅程。以下为可替换的示例经历。' };
export const PROJECTS: Metadata = { TITLE: '作品', DESCRIPTION: '把想法变成可以触摸的数字体验。' };
export const SOCIALS: Socials = [{ NAME: 'GitHub', HREF: 'https://github.com/BoliangLI/esa-react-portfolio' }];

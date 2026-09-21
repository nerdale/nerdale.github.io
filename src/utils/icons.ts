import {
  // los que ya tenías
  TbBrandJavascript, TbCode, TbBrandPython, TbBrandDjango, TbGitBranch, TbFileTypeHtml, TbBrandNotion, TbSitemap, TbUsers, TbFlag, TbUserSearch, TbRoute, TbListCheck, TbWorld, TbDeviceMobile, TbDatabase, TbSchema,
} from 'react-icons/tb';

export const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();

  // Desarrollo
  if (s.includes('python')) return TbBrandPython;
  if (s.includes('django')) return TbBrandDjango;
  if (s.includes('javascript')) return TbBrandJavascript;
  if (s.includes('git')) return TbGitBranch;
  if (s.includes('html')) return TbFileTypeHtml;
  if (s.includes('sqlite') || s.includes('crud')) return TbDatabase;  // opcional
  if (s.includes('diagrama')) return TbSchema;                        // opcional

  // UX/UI
  if (s.includes('research')) return TbUserSearch;
  if (s.includes('journey')) return TbRoute;
  if (s.includes('usabilidad')) return TbListCheck;
  if (s.includes('mobile')) return TbDeviceMobile;
  if (s.includes('web')) return TbWorld;

  // Gestión
  if (s.includes('notion')) return TbBrandNotion;
  if (s.includes('proceso')) return TbSitemap;
  if (s.includes('liderazgo') || s.includes('equipo')) return TbUsers;
  if (s.includes('hito')) return TbFlag;

  return TbCode;
};
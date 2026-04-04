import { 
  TbBrandJavascript,TbCode, TbBrandPython, TbBrandDjango,TbGitBranch,TbFileTypeHtml
} from 'react-icons/tb';

export const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('python')) return TbBrandPython;
  if (s.includes('django')) return TbBrandDjango;
  if (s.includes('javascript')) return TbBrandJavascript;
  if (s.includes('git')) return TbGitBranch;
  if (s.includes('html')) return TbFileTypeHtml;
  return TbCode;
};

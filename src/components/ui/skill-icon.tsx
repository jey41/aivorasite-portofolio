import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython,
  SiReact, SiVuedotjs, SiExpress, SiLaravel, SiTailwindcss, SiBootstrap, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiFirebase,
  SiGit, SiGithub, SiGitlab, SiFigma, SiPostman, SiCanva, SiNotion
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = '' }: SkillIconProps) {
  const Icon = getIcon(name);
  if (!Icon) return <span className={`font-bold ${className}`}>{name.substring(0, 2).toUpperCase()}</span>;
  return <Icon className={className} size={32} />;
}

function getIcon(name: string) {
  const iconMap: Record<string, any> = {
    'HTML5': SiHtml5,
    'CSS3': SiCss,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Python': SiPython,
    'Java': FaJava,
    'React': SiReact,
    'Vue': SiVuedotjs,
    'Express': SiExpress,
    'Laravel': SiLaravel,
    'Tailwind': SiTailwindcss,
    'Bootstrap': SiBootstrap,
    'Node.js': SiNodedotjs,
    'MySQL': SiMysql,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Supabase': SiSupabase,
    'Firebase': SiFirebase,
    'Git': SiGit,
    'GitHub': SiGithub,
    'GitLab': SiGitlab,
    'VS Code': VscCode,
    'Figma': SiFigma,
    'Postman': SiPostman,
    'Canva': SiCanva,
    'Notion': SiNotion,
  };
  
  return iconMap[name];
}

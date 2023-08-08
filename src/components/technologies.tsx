import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { SiEthereum, SiFigma, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { Tooltip } from '@/components/tooltip'

const techs = [{
  label: 'javascript',
  Icon: SiJavascript,
}, {
  label: 'typescript',
  Icon: SiTypescript
}, {
  label: 'html5',
  Icon: SiHtml5
}, {
  label: 'TailwindCSS',
  Icon: SiTailwindcss
}, {
  label: 'Node.JS',
  Icon: SiNodedotjs
}, {
  label: 'Next.JS',
  Icon: SiNextdotjs
}, {
  label: 'Firebase',
  Icon: SiFirebase
}, {
  label: 'Postgres',
  Icon: SiPostgresql
}, {
  label: 'MongoDB',
  Icon: SiMongodb
}, {
  label: 'Figma',
  Icon: SiFigma
}, {
  label: 'Web3/Ethereum',
  Icon: SiEthereum
}, {
  label: 'Git',
  Icon: SiGit
}]

export const Technologies = () => (
  <TooltipPrimitive.Provider>
    {
      techs.map(tech => (
        <Tooltip content={tech.label} key={tech.label}>
          <div tabIndex={0} className="w-[90px] min-[514px]:w-[120px] md:w-[90px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center">
            <tech.Icon size={52} />
          </div>
        </Tooltip>
      ))
    }
  </TooltipPrimitive.Provider>
)

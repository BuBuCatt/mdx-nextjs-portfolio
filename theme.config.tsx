import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Logo from './public/icon-cat-pc.png'
import CustomIcon from './public/coding.png'

const config: DocsThemeConfig = {

  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Image src={Logo} alt="Chia-Yu Hsu Logo" width={40} height={40} />
      <span style={{ marginLeft: '10px', fontWeight:"bold" }}>ChiaYu Hsu - Software Developer</span>
    </span> 
  ),
  project: {
    link: 'https://github.com/BuBuCatt',
  },
  
  chat: {
    link: 'https://kristen-portfolio-nextjs.vercel.app/',
    icon:(
      <Image src={CustomIcon} alt="web" width={24} height={24} />
    )
  },
  docsRepositoryBase: 'https://github.com/BuBuCatt',
  footer: {
    text: 'Chia-Yu Hsu © 2024'
  },
}

export default config

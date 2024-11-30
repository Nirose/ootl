interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://ootl.in/', // Write here your website url
	author: 'OOTL', // Site author
	title: 'Out of the Loop?', // Site title.
	description: "If you're out of the loop on any topic or event, you're at the right place.", // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}

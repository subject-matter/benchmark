import { createClient, groq } from "next-sanity";


const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2023-10-19",
	useCdn: false,
});
export async function getHomepage() {
	return client.fetch(
		groq`*[_type == "homepage"]{
        title,
        description,
        "image":mainImage.asset->url,
        "alt": mainImage.alt,
		"reviews": reviews[]->{
    "review": review,
    "reviewer": reviewer
  },
		"metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc,
	
    }`
	);
}

export async function getAccordions() {
	return client.fetch(
		groq`
		*[_type == "homepage"].Accordions[]->{
title,
    description
  }
		`
	);
}

export async function getHouses() {
	return client.fetch(
		groq`*[_type == "homepage"]{
				"projectSlider": projectSlider[]->{
				  title,
				  "image": landscape_hero.asset->url,
				  features,
				  "slug": slug.current
				}
			  }
			  `
	);
}

export async function getSelectedProjects() {
	return client.fetch(
		groq`
		*[_type == "selected-projects"]{
"mainProjectTitle": mainProject->title,
  "imageOneTitle": firstProject->title,
  "imageTwoTitle": secondProject->title,
  "mainImage": mainImage.asset->url,
  "mainProjectSlug": mainProject->slug.current,
  "imageOne": image1.asset->url,
  "imageOneSlug": firstProject->slug.current,
      "imageTwo": image2.asset->url,
  "imageTwoSlug": secondProject->slug.current,
  mainImageCol,
  "metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc
    
}`
	);
}

export async function getAllProjects() {
	return client.fetch(
		`*[_type == "project"]{
			title,
			"slug": slug.current,
			"portrait": portrait_hero.asset->url,
			  "landscape": landscape_hero.asset->url,
		  }`
	);
}

export async function getAllUpcomingProjects() {
	const upcomingProjects = await client.fetch(
		`*[_type == "upcoming_project"]{..., hero_image{"imageUrl": asset->url}, featured_image_1{"imageUrl": asset->url}, featured_image_2{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}, slug{"slug":current}}`
	);

	return {
		props: {
			upcomingProjects,
		},
		revalidate: 10,
	};
}

export async function getAllShowhomes() {
	return client.fetch(
		groq`
		*[_type == "showhome"]{
			title,
			showhome_times,
			"image": landscape_hero.asset->url,
			"slug": slug.current,
		}
`
	);
}

export async function getShowhome(slug: string) {
	return client.fetch(
		groq`
		*[_type == "showhome" && slug.current == $slug][0]{
  title,
  description,
  "slug": slug.current,
    features,
    interest_points,
    address,
	"lat": location.lat,
  	"lng": location.lng,
    showhome_times,
    pageBuilder[]{
		_type == "fullLandscape" => {
			_type,
        "image": image.asset->url,
          "alt": image.alt,
      },
          _type == "bigPortrait" => {
			_type,
        "bigImage": BigImage.asset->url,
          "bigImageAlt": BigImage.alt,
          "smallImage": SmallImage.asset->url,
          "smallImageAlt": SmallImage.alt,
        layout,
      },
             _type == "mediumLandscape" => {
				_type,
        "landscapeImage": LandscapeImage.asset->url,
          "landscapeImageAlt": LandscapeImage.alt,
          "smallImage": SmallImage.asset->url,
          "smallImageAlt": SmallImage.alt,
        layout,
    },
            _type == "individualImage" => {
				_type,
        "image": image.asset->url,
          "alt": image.alt,
          layout
      },
              _type == "smallPortrait" => {
				_type,
        "smallImage1": SmallImageOne.asset->url,
          "smallImage1Alt": SmallImageOne.alt,
          "smallImage2": SmallImageTwo.asset->url,
          "smallImage2Alt": SmallImageTwo.alt,
           "landscapeImage": LandscapeImage.asset->url,
          "landscapeImageAlt": LandscapeImage.alt,
          layout
      }

        },
		
		"metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc
}`,
		{ slug }
	);
}

export async function getAllProcesses() {
	const processes = await client.fetch(
		`*[_type == "process"]{..., hero_image{"imageUrl": asset->url}} | order(order asc)`
	);

	return {
		props: {
			processes,
		},
		revalidate: 10,
	};
}

export async function getAllWalkthroughs() {
	const walkthroughs = await client.fetch(`*[_type == "walkthrough"]`);

	return {
		props: {
			walkthroughs,
		},
		revalidate: 10,
	};
}

export async function getAboutPageInfo() {
	const [info] = await client.fetch(`*[_type == "about_info"]`);

	return {
		props: {
			info,
		},
		revalidate: 10,
	};
}

export async function getReviews() {
	return client.fetch(
		groq`*[_type == "homepage"].reviews[]->{
			"review": review,
			"reviewer": reviewer
		  
		}`
	);
}

export async function getStaff() {
	return client.fetch(
		groq`*[_type == "about_info"][0].teamMembers[]->{
			name,
			role,
			"image": image.asset->url
		  }`
	);
}

export async function getProjectPage() {
	return client.fetch(
		groq`
		*[_type == "page"]{
  title,
  description,
  "slug": slug.current,
    features,
    interest_points,
    pageBuilder[]{
		_type == "fullLandscape" => {
			_type,
        "image": image.asset->url,
          "alt": image.alt,
      },
          _type == "bigPortrait" => {
			_type,
        "bigImage": BigImage.asset->url,
          "bigImageAlt": BigImage.alt,
          "smallImage": SmallImage.asset->url,
          "smallImageAlt": SmallImage.alt,
        layout,
      },
             _type == "mediumLandscape" => {
				_type,
        "landscapeImage": LandscapeImage.asset->url,
          "landscapeImageAlt": LandscapeImage.alt,
          "smallImage": SmallImage.asset->url,
          "smallImageAlt": SmallImage.alt,
        layout,
    },
            _type == "individualImage" => {
				_type,
        "image": image.asset->url,
          "alt": image.alt,
          layout
      },
              _type == "smallPortrait" => {
				_type,
        "smallImage1": SmallImageOne.asset->url,
          "smallImage1Alt": SmallImageOne.alt,
          "smallImage2": SmallImageTwo.asset->url,
          "smallImage2Alt": SmallImageTwo.alt,
           "landscapeImage": LandscapeImage.asset->url,
          "landscapeImageAlt": LandscapeImage.alt,
          layout
      }

        }
		"metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc
  
}`
	);
}

export async function getProject(slug: string) {
	return client.fetch(
		groq`
		*[_type == "page" && slug.current == $slug][0]{
		  title,
		  description,
		  "slug": slug.current,
		  features,
		  interest_points,
		  pageBuilder[]{
			_type == "fullLandscape" => {
			  _type,
			  "image": image.asset->url,
			  "alt": image.alt,
			},
			_type == "bigPortrait" => {
			  _type,
			  "bigImage": BigImage.asset->url,
			  "bigImageAlt": BigImage.alt,
			  "smallImage": SmallImage.asset->url,
			  "smallImageAlt": SmallImage.alt,
			  layout,
			},
			_type == "mediumLandscape" => {
			  _type,
			  "landscapeImage": LandscapeImage.asset->url,
			  "landscapeImageAlt": LandscapeImage.alt,
			  "smallImage": SmallImage.asset->url,
			  "smallImageAlt": SmallImage.alt,
			  layout,
			},
			_type == "individualImage" => {
			  _type,
			  "image": image.asset->url,
			  "alt": image.alt,
			  layout
			},
			_type == "smallPortrait" => {
			  _type,
			  "smallImage1": SmallImageOne.asset->url,
			  "smallImage1Alt": SmallImageOne.alt,
			  "smallImage2": SmallImageTwo.asset->url,
			  "smallImage2Alt": SmallImageTwo.alt,
			  "landscapeImage": LandscapeImage.asset->url,
			  "landscapeImageAlt": LandscapeImage.alt,
			  layout
			}
		  },
		  "metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc
		}
	  `,
		{ slug } // Pass the slug as a parameter
	);
}

export async function getUpdates() {
	return client.fetch(
		groq`
			*[_type == "post"]{
  title,
  "slug": slug.current,
  "image": image.asset->url,
  "metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc

  }
		`
	);
}

export async function getUpdate(slug: string) {
	return client.fetch(
		groq`
		*[_type == "post" && slug.current == $slug][0]{
			title,
  "slug": slug.current,
  "image": image.asset->url,
  subtitle,
  body,
  "metatitle": seo.metaTitle,
  	"metaDesc": seo.metaDesc
}
  		`,
		{ slug }
	);
}
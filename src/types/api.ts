export interface NowPlaying {
  page: number
  results: Results[]
  dates: Dates
  total_pages: number
  totla_results: number
}

export interface Dates{
  maximum: string
  minimum: string
}

export interface Results {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface Detail {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | Object
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homapage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: {
    cast: Cast[]
    crew: Crew[]
  }
}

export interface Cast {
  cast_id: number
  character: string
  credit_id: string
  gender: number | null
  id: number
  name: string
  order: number
  profile_path: string | null
}

export interface Crew {
  credit_id: string
  department: string
  gender: number | null
  id: number
  job: string
  name: string
  profile_path: string | null
}
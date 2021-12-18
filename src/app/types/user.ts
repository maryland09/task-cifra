export interface User{
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface Support{
  url: string,
  text: string
}

export interface UserInfoResponse{
  data: User,
  support: Support
}

export interface UserResponse{
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: User[],
  support: Support
}

export interface Resource{
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string
}

export interface ResourceResponse{
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Resource[],
  support: Support
}


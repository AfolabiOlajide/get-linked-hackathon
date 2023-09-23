type RegisterationType = {
    email: string | undefined,
    phone_number: string | undefined,
    team_name: string | undefined,
    group_size: number | undefined,
    project_topic: string | undefined,
    category: number | undefined,
    privacy_poclicy_accepted: boolean | undefined
}

type ContactType = {
    email: string | undefined,
    phone_number: string | undefined,
    first_name: string | undefined,
    message: string | undefined
}

type CategoryItem = {
    id: number,
    name: string
}
export type Physician = {
    physicianId: string;
}

export type NearestPhysician = { physician: Physician, distance: string }
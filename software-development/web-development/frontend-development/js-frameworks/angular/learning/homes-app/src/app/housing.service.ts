import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'
import { AbstractControl } from '@angular/forms'

export type TLocation = HousingLocation | undefined

@Injectable({
  providedIn: 'root', // can be provided at the root level, which means it is available to the entire application and can be injected into any class using the Angular dependency injection system inject()
})
export class HousingService {
  url: string = 'http://localhost:3000/locations'

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }

  async getHousingLocation(id: number): Promise<TLocation> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? undefined
  }

  submitApplication(applicationPayload: TApplicationPayload): void {
    for (const [k, v] of Object.entries(applicationPayload)) {
      console.log(`${k} => ${v}`)
    }
  }
}

export interface TApplicationPayload {
  firstName: string
  lastName: string
  email: string
}

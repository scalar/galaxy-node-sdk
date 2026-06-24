// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class CelestialBodies extends APIResource {
  /**
   * Create a celestial body
   *
   * @param {CelestialBodyCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CelestialBody>} Celestial body created
   *
   * @example
   * ```ts
   * const celestialBody = await client.celestialBodies.create({
   *   name: "",
   *   type: "planet",
   * });
   * ```
   */
  create(body: CelestialBodyCreateParams, options?: RequestOptions): APIPromise<CelestialBody> {
    return this._client.post("/celestial-bodies", { body: body, ...options });
  }
}

/**
 * A celestial body which can be either a planet or a satellite
 */
export type CelestialBody = Planet | { name: string; type: "satellite" | "moon" | "asteroid" | "comet"; id?: number; description?: string | null; diameter?: number; orbit?: { planetId?: number; orbitalPeriod?: number; distance?: number } };

/**
 * A planet in the Scalar Galaxy
 */
export interface Planet {
  /**
   * @format int64
   */
  id: number;
  name: string;
  type: "planet" | "terrestrial" | "gas_giant" | "ice_giant" | "dwarf" | "super_earth";
  description?: string | null;
  /**
   * A score from 0 to 1 indicating potential habitability
   * @format float
   * @minimum 0
   * @maximum 1
   */
  habitabilityIndex?: number;
  physicalProperties?: { mass?: number; radius?: number; gravity?: number; temperature?: { min?: number; max?: number; average?: number } };
  /**
   * Atmospheric composition
   */
  atmosphere?: Array<{ compound?: string; percentage?: number }>;
  /**
   * @format date-time
   */
  discoveredAt?: string;
  image?: string | null;
  satellites?: Array<{ name: string; type: "satellite" | "moon" | "asteroid" | "comet"; id?: number; description?: string | null; diameter?: number; orbit?: { planetId?: number; orbitalPeriod?: number; distance?: number } }>;
  /**
   * A user
   */
  creator?: User;
  tags?: Array<string>;
  /**
   * @format date-time
   */
  lastUpdated?: string;
  /**
   * URL which gets invoked upon a successful operation
   * @format uri
   */
  successCallbackUrl?: string;
  /**
   * URL which gets invoked upon a failed operation
   * @format uri
   */
  failureCallbackUrl?: string;
}

/**
 * A user
 */
export interface User {
  /**
   * @format int64
   */
  id?: number;
  name?: string;
}

export type CelestialBodyCreateParams = Planet | CelestialBodyCreateParams.CelestialBodyCreateParamsItem;

export namespace CelestialBodyCreateParams {
  export interface CelestialBodyCreateParamsItem {
    name: string;
    type: "satellite" | "moon" | "asteroid" | "comet";
    description?: string | null;
    /**
     * Diameter in kilometers
     * @format float
     */
    diameter?: number;
    orbit?: CelestialBodyCreateParamsItem.Orbit;
  }

  export namespace CelestialBodyCreateParamsItem {
    export interface Orbit {
      /**
       * The ID of the planet this satellite orbits
       * @format int64
       */
      planetId?: number;
      /**
       * Orbital period in Earth days
       * @format float
       */
      orbitalPeriod?: number;
      /**
       * Average distance from the planet in kilometers
       * @format float
       */
      distance?: number;
    }
  }
}
export declare namespace CelestialBodies {
  export {
    type CelestialBody as CelestialBody,
    type CelestialBodyCreateParams as CelestialBodyCreateParams,
  };
}
export { CelestialBodies as CelestialBodyResource };

import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'
import { Collection } from 'mongodb'

export type Collections = 'pull-requests' | 'users' | 'releases'

export type PullRequest = RestEndpointMethodTypes['pulls']['get']['response']['data']

export type PullRequestFull =
    RestEndpointMethodTypes['pulls']['get']['response']['data']
    & {
        reviewers: Reviewer[]
        lastModifiedSince?: string
    }

export type User =
    RestEndpointMethodTypes['users']['getByUsername']['response']['data']

export type AuthenticatedUser =
    RestEndpointMethodTypes['users']['getAuthenticated']['response']['data']

export type Reviewer =
    RestEndpointMethodTypes['pulls']['listReviews']['response']['data'][0]
    & {
        user: User
    }

export interface Release {
    [index: string]: unknown
    url: string
    team: string
    version: string
}

export type CustomCollection<Name extends Collections> = Collection<
    Name extends 'pull-requests'
        ? PullRequestFull
        : Name extends 'users'
            ? User
            : Release
>
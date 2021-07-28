import { Resolver, Query } from "@nestjs/graphql";


@Resolver(() => Boolean)
export class UserResolver {

    @Query(() => Boolean)
    getAllUsers(): boolean {
        return true;
    }

}
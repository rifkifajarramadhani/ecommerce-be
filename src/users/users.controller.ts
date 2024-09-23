import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor() {}

    @Get()
    getUsers() {
        return 'All users';
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return 'User';
    }

    @Post()
    createUser(@Body() user: {}) {
        return 'Create user';
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() userData: {}) {
        return 'Update user';
    }
}

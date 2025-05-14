﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spiderly.Security.Enums
{
    public enum RegistrationVerificationResultStatusCodes // TODO FT: Delete if don't need
    {
        UserDoesNotExistAndDoesNotHaveValidToken = 0,
        UserWithoutPasswordExists = 1,
        UserWithPasswordExists = 2,
        UnexpectedError = 3,
        // UserDoesNotExistAndHasValidToken, // Maybe the user wants to change the password, even if he already has valid verification token
    }
}

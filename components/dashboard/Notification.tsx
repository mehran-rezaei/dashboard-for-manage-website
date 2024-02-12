import React from 'react';

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";


const notification = () => {
    return (
        <div >
                <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-white" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex justify-end  items-center gap-3">
            
                <div dir='rtl' className='text-right'>
                  <Typography
                    variant="big"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>پیام جدید </strong> از جیمز
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 دقیقه پیش
                  </Typography>
                </div>
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
              </MenuItem>
              <MenuItem className="flex justify-end  items-center gap-3">
            
            <div dir='rtl' className='text-right'>
              <Typography
                variant="big"
                color="blue-gray"
                className="mb-1 font-normal"
              >
                <strong>پیام جدید </strong> از جیمز
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 text-xs font-normal opacity-60"
              >
                <ClockIcon className="h-3.5 w-3.5" /> 13 دقیقه پیش
              </Typography>
            </div>
            <Avatar
              src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
              alt="item-1"
              size="sm"
              variant="circular"
            />
          </MenuItem>
          <MenuItem className="flex justify-end  items-center gap-3">
            
            <div dir='rtl' className='text-right'>
              <Typography
                variant="big"
                color="blue-gray"
                className="mb-1 font-normal"
              >
                <strong>پیام جدید </strong> از جیمز
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 text-xs font-normal opacity-60"
              >
                <ClockIcon className="h-3.5 w-3.5" /> 13 دقیقه پیش
              </Typography>
            </div>
            <Avatar
              src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
              alt="item-1"
              size="sm"
              variant="circular"
            />
          </MenuItem>
              {/* <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    Payment successfully completed
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem> */}
            </MenuList>
          </Menu>
        </div>
    );
};

export default notification;
"use client";
import { FetchData } from '@/Redux/reducers/AuthSlice';
import { AppDispatch } from '@/Redux/Store';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function GetAuth() {
    const dispatch = useDispatch<AppDispatch>();
    const { data: session } = useSession();

    if (session) {
        dispatch(FetchData(session.user.email));
    }
    return null;
}

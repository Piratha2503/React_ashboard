import React from 'react'

const commonLink = "https://dummyjson.com/";
const localLink = "http://192.168.56.1:8090/dashboard/";

export const productsListApi = commonLink+"products";
export const clientsListApi = commonLink+"users";
export const taskListApi = localLink+"getTaskList";
export const taskListGroupedApi = localLink+"getTaskListByStatusGroup";
export const getTaskByIndividualId = localLink+"getIndividualTask/";

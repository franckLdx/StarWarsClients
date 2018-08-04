import React from 'react';
import { List2GridLinkItems } from './listItem';

const cmp = (filedName) => (a,b) => {
  if(a[filedName] < b[filedName]) return -1;
  if(a[filedName] > b[filedName]) return 1;
  return 0;
}

export const FilmsList = ({className, list}) => (
  <List2GridLinkItems
    className = { className }
    list = { list.sort(cmp('episode_id')) }
    cast = { item => { return { key: item.episode_id, to: `/films/${item.episode_id}`, data:`${item.episode_id} - ${item.title}` }; } }
  />
);

export const PeopleList = ({className, list}) => (
  <List2GridLinkItems
    className = { className }
    list = { list.sort(cmp('name')) }
    cast = { item => { return { key: item.id, to: `/people/${item.id}`, data:item.name }; } }
  />
);

export const PlanetsList = ({className, list}) => (
  <List2GridLinkItems
    className = { className }
    list = { list.sort(cmp('name')) }
    cast = { item => { return { key: item.id, to: `/planets/${item.id}`, data:item.name }; } }
  />
);

export const StarshipsList = ({className, list}) => (
  <List2GridLinkItems
    className = { className }
    list = { list.sort(cmp('name')) }
    cast = { item => { return { key: item.id, to: `/starships/${item.id}`, data:item.name }; } }
  />
);

export const VehiclesList = ({className, list}) => (
  <List2GridLinkItems
    className = { className }
    list = { list.sort(cmp('name')) }
    cast = { item => { return { key: item.id, to: `/vehicles/${item.id}`, data:item.name }; } }
  />
)
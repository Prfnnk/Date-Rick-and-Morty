import React from 'react';
import { useForm } from 'react-hook-form';
import { FilterItem, FilterBody, Title, ItemTitle, Input, Checkbox, CheckboxItem, Label } from './styles/style';

const FilterBlock = () => {
  return (
    <FilterBody>
      <Title>Выберите фильтры для поиска</Title>
      <FilterItem>
        <ItemTitle>by name</ItemTitle>
        <Input></Input>
      </FilterItem>
      <FilterItem>
        <ItemTitle>by species</ItemTitle>
        <CheckboxItem>
          <Checkbox type="checkbox" id="human" value="human"></Checkbox>
          <Label htmlFor="human">Human</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox type="checkbox" id="alien" value="alien"></Checkbox>
          <Label htmlFor="alien">Alien</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox type="checkbox" id="mc" value="mc"></Checkbox>
          <Label htmlFor="mc">Mythological Creature</Label>
        </CheckboxItem>
      </FilterItem>
      <FilterItem>
        <ItemTitle>by gender</ItemTitle>
        <CheckboxItem>
          <Checkbox type="checkbox" id="female" value="female"></Checkbox>
          <Label htmlFor="female">female</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox type="checkbox" id="male" value="male"></Checkbox>
          <Label htmlFor="male">male</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox type="checkbox" id="genderless" value="genderless"></Checkbox>
          <Label htmlFor="genderless">genderless</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox type="checkbox" id="unknown" value="unknown"></Checkbox>
          <Label htmlFor="unknown">unknown</Label>
        </CheckboxItem>
      </FilterItem>
    </FilterBody>
  );
};
export default FilterBlock;

import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import gsap from 'gsap';
import { Props } from '../../shared-types/shared-types';

import { randomPage } from '../../utils/randomPage';
import {
  FilterItem,
  FilterBody,
  Title,
  ItemTitle,
  Input,
  Checkbox,
  CheckboxItem,
  Label,
  SubmitBtn,
  SwitchLabel,
  SwitchItem,
  Slider,
  ButtonsBlock,
  SwitchBlock,
  SwitchTitle,
} from './styles/style';

type Form = {
  name: string;
  gender: string;
  species: string;
  status: string;
};

const FilterBlock = ({
  setNewName,
  setNewGender,
  setNewSpecies,
  setRefetch,
  setCards,
  setIsRefetching,
  fetchMore,
  setNextPage,
  nextPage,
  filterActive,
}: Props): JSX.Element => {
  const { register, handleSubmit } = useForm<Form>();
  const filterRef = useRef();

  const filterBlockAnim = (): void => {
    const filter = filterRef.current;
    gsap.from(filter, 0.5, {
      autoAlpha: 0,
      x: -50,
      onComplete: () => {
        console.log('kek');
      },
    });
  };

  // useEffect(() => {
  //   filterBlockAnim();
  // }, [filterActive]);

  const onSubmit = (data: Form): void => {
    const name = data?.name;
    const gender = data?.gender;
    const species = data?.species;
    const status = data?.status;

    setIsRefetching(true);
    fetchMore({
      variables: {
        page: 1,
        name,
        gender: gender || '',
        species: species || '',
        status: status || '',
      },
    })
      .then((res) => {
        let newPage = res?.data?.characters?.info?.next;
        const newData = res?.data?.characters?.results;
        const shuffledNew = _.shuffle(newData);
        if (newPage === null) {
          newPage = randomPage;
        }
        setNewName(name);
        setNewGender(gender);
        setNewSpecies(species);
        setCards(shuffledNew);
        setNextPage(newPage);
        setRefetch(true);
      })
      .finally(() => {
        setIsRefetching(false);
      });
  };

  return (
    <FilterBody ref={filterRef} onSubmit={handleSubmit(onSubmit)}>
      <Title>Выберите фильтры для поиска</Title>
      <FilterItem>
        <ItemTitle>По имени:</ItemTitle>
        <Input ref={register} name="name"></Input>
      </FilterItem>
      <FilterItem>
        <ItemTitle>По виду:</ItemTitle>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="human" value="Human"></Checkbox>
          <Label htmlFor="human">Human</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="alien" value="Alien"></Checkbox>
          <Label htmlFor="alien">Alien</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="mc" value="Mythological Creature"></Checkbox>
          <Label htmlFor="mc">Mythological Creature</Label>
        </CheckboxItem>
      </FilterItem>
      <FilterItem>
        <ItemTitle>По полу:</ItemTitle>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="female" value="female"></Checkbox>
          <Label htmlFor="female">Female</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="male" value="male"></Checkbox>
          <Label htmlFor="male">Male</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="genderless" value="genderless"></Checkbox>
          <Label htmlFor="genderless">Genderless</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="unknown" value="unknown" />
          <Label htmlFor="unknown">Unknown</Label>
        </CheckboxItem>
      </FilterItem>
      <ButtonsBlock>
        <SwitchBlock>
          <SwitchTitle>Показать только живых</SwitchTitle>
          <SwitchLabel>
            <SwitchItem name="status" ref={register} type="checkbox" value="Alive" />
            <Slider />
          </SwitchLabel>
        </SwitchBlock>

        <SubmitBtn ref={register} type="submit">
          Найти!
        </SubmitBtn>
      </ButtonsBlock>
    </FilterBody>
  );
};
export default FilterBlock;

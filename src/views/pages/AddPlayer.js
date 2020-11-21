import Axios from 'axios';
import Button from 'components/common/Button';
import Input from 'components/common/Form/Input';
import Select from 'components/common/Form/Select';
import React, { useRef, useState } from 'react';
import useSWR, { mutate, trigger } from 'swr';

const AddPlayerPage = ({ history }) => {
  const [value, setValue] = useState({ name: '', continent: '' });

  const { data: players } = useSWR('/api/players');

  const inputRef = {
    name: useRef(null),
    continent: useRef(null),
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    ['name', 'continent'].forEach(async item => {
      if (!value[item]) {
        return (inputRef[item].current.className = 'form-control is-invalid');
      }
      return (inputRef[item].current.className = 'form-control is-valid');
    });

    if (value.name && value.continent) {
      mutate('/api/players/', [...players, value], false);
      const { data: newPlayer } = await Axios.post('api/players', { ...value });
      trigger('/api/players/', true);

      return history.push(`/players/${newPlayer.id}`);
    }
  };

  const handleOnChange = async e => {
    const targetName = e.currentTarget.id;
    const targetValue = e.currentTarget.value;

    if (!targetValue) {
      inputRef[targetName].current.className = 'form-control is-invalid';
    }

    inputRef[targetName].current.className = 'form-control is-valid';
    setValue({ ...value, [targetName]: targetValue });
  };

  return (
    <>
      <h1>Add Player</h1>
      <form className="needs-validation">
        <Input
          name="name"
          label="Name"
          required={true}
          ref={inputRef.name}
          value={value.name}
          feedback={'Please enter a name.'}
          onChange={handleOnChange}
        />
        <Select
          name="continent"
          label="Continent"
          options={['Asia', 'Europe', 'North America']}
          required={true}
          ref={inputRef.continent}
          value={value.continent}
          onChange={handleOnChange}
        />
        <Button type="submit" onClick={handleOnSubmit}>
          Add player
        </Button>
      </form>
    </>
  );
};

export default AddPlayerPage;

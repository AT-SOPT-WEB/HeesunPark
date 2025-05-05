import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          ` https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log(res.data);
        setPokemon(res.data);
      } catch (error) {
        console.error('포켓몬 리스트를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemon) return <p>로딩 중...</p>;

  return (
    <div>
      <Link to='/'>
        <p>목록으로</p>
      </Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name} 이미지`} />
      <p>{pokemon.types.map((t) => t.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;

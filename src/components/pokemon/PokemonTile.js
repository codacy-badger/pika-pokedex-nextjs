import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import { Link, withTranslation } from '../../i18n';
import PokemonTypes from './PokemonTypes';

const PokemonTile = ({ t, pokemon }) => {
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="pokemon-card p-3">
      <Row className="pokemon-image justify-content-center">
        <Link href={`/pokemon/${pokemon.id}`}>
          <Image src={pokemon.image} label={pokemon.slug} alt={pokemon.slug} thumbnail />
        </Link>
      </Row>
      <Row className="justify-content-center flex-nowrap">
        <h5>{`${pokemon.code} - ${pokemon.name}`}</h5>
      </Row>
      <Row className="justify-content-center">
        <PokemonTypes types={pokemon.types} />
      </Row>
    </Col>
  );
};

PokemonTile.propTypes = {
  pokemon: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default withTranslation('pokemon')(PokemonTile);
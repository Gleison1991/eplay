import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem m dolor sit amet consectetur adipisicing elit. Fuga harum ullam,
      saepe quod, atque quia aliquam minus a enim eius, perferendis eaque autem
      eveniet est sequi quisquam commodi nemo esse.
    </Descricao>
  </Card>
)

export default Product

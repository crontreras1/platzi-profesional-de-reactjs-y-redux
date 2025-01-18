import { HeartOutlined, StarOutlined } from "@ant-design/icons"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"

export const PokemonCard = () => {
    return (
        <Card 
            style={{ width: 250 }}
            title='Pokemon name'
            cover={ <img alt='pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' />}
            extra={ <HeartOutlined /> }
        >
            <Meta 
                description='Pokemon description'
            /> 
        </Card>
    )
}
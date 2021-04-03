import React from 'react'

import { CardSeviceConsumer } from '../card-service-context'

const withCardService = (Wrapped) => () => {
    return (
        <CardSeviceConsumer>
            {(cardService) => {
                return <Wrapped cardService={cardService} />
            }}

        </CardSeviceConsumer>
    )
}

export default withCardService
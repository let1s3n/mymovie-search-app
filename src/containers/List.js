import React, { useState, useEffect } from 'react'
import { Row, Col, Card,Button} from 'react-bootstrap'

const List = ({search}) => {

  const [res, setRes] = useState([]);

  useEffect(async () => {
    try {
      setRes(await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}')`).then(response => response.json()).then(data => data.Search));
    } catch (error) {
      console.error(error);
    }
  }, [search])


  return (
    <Row className="gy-4">
      {res ? res.map(item => {
        return (
          <Col className="col-lg-3">
            <Card style={{ width: '18rem', height: '600px' }}>

              <Card.Img style={{ height: '400px' }} variant="top" src={item.Poster} />
              <Card.Body className="position-relative">
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text className="line-break">
                  {`${item.Year}
                    ${item.Type}`}
                </Card.Text>
                <Button style={{ bottom: '2rem' }} className="position-absolute" variant="primary" href={`https://www.google.com.pe/search?q=${item.Title}`} target="_blank">Ver más</Button>
              </Card.Body>



            </Card>
          </Col>)
      }): <h1>{`No se encontraron resultados para ${search}`}</h1>}
    </Row>

  )
}

export default List;



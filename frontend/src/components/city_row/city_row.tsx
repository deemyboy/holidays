import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IForecast } from "../city_table/city_table";

export interface ICityRowProps {
    cityName: string;
    weatherIcons: IWeatherIconProp[];
    forecasts: IForecast[];
}

export const CityRow: React.FC<ICityRowProps> = ({
    cityName,
    weatherIcons,
    forecasts,
}) => {
    return (
        <Row className="city-row">
            <Col className="col-3">
                <h3 className="city-row__city-name">{cityName}</h3>
            </Col>
            <Col className="col-8">
                <WeatherIconRow weatherIcons={weatherIcons} />
            </Col>
            <Col className="col-1">
                <Button />
            </Col>
        </Row>
    );
};

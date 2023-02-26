import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardTitle,
  CardInfo,
  CardPhoto,
  CardData,
  CardDataItem,
  CardWorkDays,
  CardTime,
  CardAddress,
} from './Friend.styled';

import notfound from './notfound.jpg';

export const Friend = ({
  _id,
  title,
  url,
  imageUrl,
  addressUrl,
  address,
  email,
  phone,
  workDays,
}) => {
  const { t } = useTranslation();

  const [isTimeHovered, setIsTimeHovered] = useState(false);
  const daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const today = new Date().getDay();
  const hours = workDays?.[today]?.isOpen
    ? `${workDays[today].from} - ${workDays[today].to}`
    : null;

  const handleTimeHover = () => {
    setIsTimeHovered(true);
  };

  const handleTimeLeave = () => {
    setIsTimeHovered(false);
  };

  return (
    <Card key={_id}>
      <CardTitle href={url} target="_blank" rel="noreferrer">
        {title}
      </CardTitle>
      <CardInfo>
        <CardPhoto>
          <img src={imageUrl || notfound} alt="partner logo" />
        </CardPhoto>
        <CardData>
          <ul>
            <CardDataItem>
              <CardTime
                onMouseEnter={handleTimeHover}
                onMouseLeave={handleTimeLeave}
              >
                {t('Time:')}
              </CardTime>
              {hours ? (
                <CardTime
                  onMouseEnter={handleTimeHover}
                  onMouseLeave={handleTimeLeave}
                >
                  {hours}
                </CardTime>
              ) : (
                <span>-----------------------------</span>
              )}
              {Object.keys(workDays ?? {}).length > 0 && (
                <div>
                  {isTimeHovered && (
                    <CardWorkDays>
                      <ul>
                        {Object.entries(workDays ?? {}).map(
                          ([dayIndex, { isOpen, from, to }]) => {
                            const day = daysOfWeek[dayIndex];
                            if (!isOpen) return null;
                            return (
                              <li key={day}>
                                <span>{day} </span>
                                <span>{`${from} - ${to}`}</span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </CardWorkDays>
                  )}
                </div>
              )}
            </CardDataItem>
            <CardDataItem>
              <span>{t('Address')}:</span>
              {address ? (
                <CardAddress>
                  <a href={addressUrl ?? '#'} target="_blank" rel="noreferrer">
                    {address}
                  </a>
                </CardAddress>
              ) : (
                <CardAddress>-----------------------------</CardAddress>
              )}
            </CardDataItem>
            <CardDataItem>
              <span>{t('Email')}:</span>
              {email ? (
                <span>
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
              ) : (
                <span>-----------------------------</span>
              )}
            </CardDataItem>
            <CardDataItem>
              <span>{t('Phone')}:</span>
              {phone ? (
                <span>
                  <a href={`tel:${phone}`}>{phone}</a>
                </span>
              ) : (
                <span>-----------------------------</span>
              )}
            </CardDataItem>
          </ul>
        </CardData>
      </CardInfo>
    </Card>
  );
};

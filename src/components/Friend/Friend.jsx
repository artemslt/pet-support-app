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
  Hoverable
} from './Friend.styled';
import notfound from '../../images/notfound.jpg';

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
                <Hoverable>{t('Time')}</Hoverable>
              </CardTime>
              {hours ? (
                <CardTime
                  onMouseEnter={handleTimeHover}
                  onMouseLeave={handleTimeLeave}
                >
                 <Hoverable> {hours}</Hoverable>
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
              <Hoverable>{t('Address')}:</Hoverable>
              {address ? (
                <CardAddress>
                  <a href={addressUrl ?? '#'} target="_blank" rel="noreferrer">
                  <Hoverable> {address}</Hoverable>
                  </a>
                </CardAddress>
              ) : (
                <CardAddress>-----------------------------</CardAddress>
              )}
            </CardDataItem>
            <CardDataItem>
              <Hoverable>{t('Email')}:</Hoverable>
              {email ? (
                <Hoverable>
                  <a href={`mailto:${email}`}><Hoverable> {email}</Hoverable></a>
                </Hoverable>
              ) : (
                <span>-----------------------------</span>
              )}
            </CardDataItem>
            <CardDataItem>
              <Hoverable>{t('Phone')}:</Hoverable>
              {phone ? (
                <Hoverable>
                  <a href={`tel:${phone}`}><Hoverable> {phone}</Hoverable></a>
                </Hoverable>
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

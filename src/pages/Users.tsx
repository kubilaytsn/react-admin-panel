import { useTranslation } from 'react-i18next';

const Users = () => {
  const { t } = useTranslation();
  return <div>{t('users')}</div>;
};

export default Users;

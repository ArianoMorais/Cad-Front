import React from 'react';
import { useProfile } from '../../components/Profile/hook';
import DashboardContent from '../../components/Dashboard/DashboardContent';

function DashboardPage() {
  const { formData } = useProfile();

  const nameParts = formData.name.split(' ');

  const firstName = nameParts[0];

  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  return (
    <DashboardContent firstName={firstName} lastName={lastName} />
  );
}

export default DashboardPage;
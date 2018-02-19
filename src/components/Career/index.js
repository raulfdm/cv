import React from 'react';
import { Section, SectionBody, SectionTitle } from '../Section';
import carrerSummary from '../../globals/data/carrerSummary';

export default () => {
  return (
    <Section>
      <SectionTitle title="Career Summary" />
      <SectionBody>{carrerSummary}</SectionBody>
    </Section>
  );
};

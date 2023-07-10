/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  PREVALENCE_DETAILS_TABLE_ALERT_COUNT_CELL_TEST_ID,
  PREVALENCE_DETAILS_TABLE_DOC_COUNT_CELL_TEST_ID,
  PREVALENCE_DETAILS_TABLE_HOST_PREVALENCE_CELL_TEST_ID,
  PREVALENCE_DETAILS_TABLE_NAME_CELL_TEST_ID,
  PREVALENCE_DETAILS_TABLE_TEST_ID,
  PREVALENCE_DETAILS_TABLE_TYPE_CELL_TEST_ID,
  PREVALENCE_DETAILS_TABLE_USER_PREVALENCE_CELL_TEST_ID,
} from '../../../public/flyout/left/components/test_ids';
import { getDataTestSubjectSelector } from '../../helpers/common';
import { INSIGHTS_TAB_PREVALENCE_BUTTON_TEST_ID } from '../../../public/flyout/left/tabs/test_ids';

export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_BUTTON = getDataTestSubjectSelector(
  INSIGHTS_TAB_PREVALENCE_BUTTON_TEST_ID
);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE = getDataTestSubjectSelector(
  PREVALENCE_DETAILS_TABLE_TEST_ID
);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_TYPE_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_TYPE_CELL_TEST_ID);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_NAME_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_NAME_CELL_TEST_ID);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_ALERT_COUNT_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_ALERT_COUNT_CELL_TEST_ID);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_DOC_COUNT_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_DOC_COUNT_CELL_TEST_ID);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_HOST_PREVALENCE_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_HOST_PREVALENCE_CELL_TEST_ID);
export const DOCUMENT_DETAILS_FLYOUT_INSIGHTS_TAB_PREVALENCE_TABLE_USER_PREVALENCE_CELL =
  getDataTestSubjectSelector(PREVALENCE_DETAILS_TABLE_USER_PREVALENCE_CELL_TEST_ID);

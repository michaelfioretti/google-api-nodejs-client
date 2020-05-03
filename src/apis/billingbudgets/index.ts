// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {billingbudgets_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1beta1: billingbudgets_v1beta1.Billingbudgets,
};

export function billingbudgets(
  version: 'v1beta1'
): billingbudgets_v1beta1.Billingbudgets;
export function billingbudgets(
  options: billingbudgets_v1beta1.Options
): billingbudgets_v1beta1.Billingbudgets;
export function billingbudgets<T = billingbudgets_v1beta1.Billingbudgets>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1beta1' | billingbudgets_v1beta1.Options
) {
  return getAPI<T>('billingbudgets', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

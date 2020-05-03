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
import {oslogin_v1} from './v1';
import {oslogin_v1alpha} from './v1alpha';
import {oslogin_v1beta} from './v1beta';

export const VERSIONS = {
  v1: oslogin_v1.Oslogin,
  v1alpha: oslogin_v1alpha.Oslogin,
  v1beta: oslogin_v1beta.Oslogin,
};

export function oslogin(version: 'v1'): oslogin_v1.Oslogin;
export function oslogin(options: oslogin_v1.Options): oslogin_v1.Oslogin;
export function oslogin(version: 'v1alpha'): oslogin_v1alpha.Oslogin;
export function oslogin(
  options: oslogin_v1alpha.Options
): oslogin_v1alpha.Oslogin;
export function oslogin(version: 'v1beta'): oslogin_v1beta.Oslogin;
export function oslogin(
  options: oslogin_v1beta.Options
): oslogin_v1beta.Oslogin;
export function oslogin<
  T = oslogin_v1.Oslogin | oslogin_v1alpha.Oslogin | oslogin_v1beta.Oslogin
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | oslogin_v1.Options
    | 'v1alpha'
    | oslogin_v1alpha.Options
    | 'v1beta'
    | oslogin_v1beta.Options
) {
  return getAPI<T>('oslogin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Document } from 'sketch/dom';
import { command } from '../command';
import { syncTextStyles } from '../../sharedStyles/type';

export function sync() {
  command('commands/type/sync', () => {
    const document = Document.getSelectedDocument();
    syncTextStyles(document);
  });
}

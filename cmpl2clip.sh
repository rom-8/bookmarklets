#!/bin/bash
(
echo -n javascript:
closure-compiler $*
)|pbcopy
echo done

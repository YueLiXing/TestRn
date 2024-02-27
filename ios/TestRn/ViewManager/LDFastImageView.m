//
//  LDFastImageView.m
//  TestRn
//
//  Created by 岳立兴 on 2024/2/27.
//

#import "LDFastImageView.h"

@implementation LDFastImageView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    [[NSNotificationCenter defaultCenter] addObserverForName:@"noti.rntextview.test" object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification * _Nonnull notification) {
      if (self.onFastImageLoad) {
        self.onFastImageLoad(@{@"from": @"LDFastImageView"});
        NSLog(@"LDFastImageView.callback");
      }
    }];
  }
  return self;
}

- (void)setUri:(NSString *)uri {
  _uri = uri;
}

@end
